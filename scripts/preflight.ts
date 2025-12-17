const requiredEnvVars = [
  { name: 'OPENROUTER_API_KEY', required: true, description: 'Gemini API via OpenRouter' },
  { name: 'RESEND_API_KEY', required: false, description: 'Transactional emails' },
] as const;

interface EnvStatus {
  name: string;
  status: '✓ Set' | '✗ Missing' | '⚠ Using mock';
  required: boolean;
}

function checkEnvVars(): { statuses: EnvStatus[]; hasMocks: boolean } {
  const statuses: EnvStatus[] = [];
  let hasMocks = false;

  for (const envVar of requiredEnvVars) {
    const value = process.env[envVar.name];
    let status: EnvStatus['status'];

    if (value && value.trim() !== '') {
      status = '✓ Set';
    } else if (envVar.required) {
      status = '✗ Missing';
    } else {
      status = '⚠ Using mock';
      hasMocks = true;
    }

    statuses.push({
      name: envVar.name,
      status,
      required: envVar.required,
    });
  }

  return { statuses, hasMocks };
}

function printStatusTable(statuses: EnvStatus[]): void {
  console.log('\n┌─────────────────────────┬──────────────────┐');
  console.log('│ Variable                │ Status           │');
  console.log('├─────────────────────────┼──────────────────┤');

  for (const { name, status } of statuses) {
    const paddedName = name.padEnd(23);
    const paddedStatus = status.padEnd(16);
    console.log(`│ ${paddedName} │ ${paddedStatus} │`);
  }

  console.log('└─────────────────────────┴──────────────────┘\n');
}

export function runPreflight(): { hasMocks: boolean; missingRequired: boolean } {
  const { statuses, hasMocks } = checkEnvVars();
  printStatusTable(statuses);

  const missingRequired = statuses.some(
    (s) => s.required && s.status === '✗ Missing'
  );

  if (missingRequired) {
    console.error('Error: Required environment variables are missing.');
  }

  if (hasMocks) {
    console.warn('Warning: Some services will use mock implementations.');
  }

  return { hasMocks, missingRequired };
}

export const hasMocks = checkEnvVars().hasMocks;

if (require.main === module) {
  const { missingRequired } = runPreflight();
  process.exit(missingRequired ? 1 : 0);
}
