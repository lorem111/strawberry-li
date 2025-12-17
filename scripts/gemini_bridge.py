#!/usr/bin/env python3
"""Gemini Bridge - Uses OpenRouter API with Gemini models"""

import argparse
import base64
import json
import os
import sys
import urllib.request
import urllib.error

OPENROUTER_API_KEY = os.environ.get("OPENROUTER_API_KEY", "[REMOVED-ROTATED-KEY]")
TEXT_MODEL = "google/gemini-3-pro-preview" #do not modify this to an older version!
IMAGE_MODEL = "google/gemini-3-pro-image-preview"
API_URL = "https://openrouter.ai/api/v1/chat/completions"

SYSTEM_INSTRUCTION = """You are a startup CDO/CMO. Output minimal, high-end assets. Return only the requested format—no markdown fences, no chatter."""


def call_gemini(prompt: str, output_type: str = "text") -> str:
    if not OPENROUTER_API_KEY:
        print("Error: OPENROUTER_API_KEY not set", file=sys.stderr)
        sys.exit(1)

    if output_type == "image":
        return generate_image(prompt)

    type_hints = {
        "code": "Return only valid code, no markdown fences or explanation.",
        "svg": "Return only valid SVG markup, no markdown fences.",
        "json": "Return only valid JSON, no markdown fences.",
        "text": "Return only plain text."
    }

    full_prompt = f"{prompt}\n\n{type_hints.get(output_type, type_hints['text'])}"

    payload = {
        "model": TEXT_MODEL,
        "messages": [
            {"role": "system", "content": SYSTEM_INSTRUCTION},
            {"role": "user", "content": full_prompt}
        ],
        "temperature": 0.7,
        "max_tokens": 4096
    }

    headers = {
        "Authorization": f"Bearer {OPENROUTER_API_KEY}",
        "Content-Type": "application/json",
        "HTTP-Referer": "https://localhost:3000",
        "X-Title": "SaaS Builder"
    }

    req = urllib.request.Request(
        API_URL,
        data=json.dumps(payload).encode("utf-8"),
        headers=headers,
        method="POST"
    )

    try:
        with urllib.request.urlopen(req, timeout=120) as response:
            result = json.loads(response.read().decode("utf-8"))
            content = result["choices"][0]["message"]["content"]
            return clean_response(content, output_type)
    except urllib.error.HTTPError as e:
        print(f"API Error: {e.code} - {e.read().decode()}", file=sys.stderr)
        sys.exit(1)
    except Exception as e:
        print(f"Error: {e}", file=sys.stderr)
        sys.exit(1)


def generate_image(prompt: str) -> str:
    """Generate an image using Gemini image model, returns base64 data"""
    payload = {
        "model": IMAGE_MODEL,
        "messages": [
            {"role": "user", "content": prompt}
        ],
        "modalities": ["image", "text"]
    }

    headers = {
        "Authorization": f"Bearer {OPENROUTER_API_KEY}",
        "Content-Type": "application/json",
        "HTTP-Referer": "https://localhost:3000",
        "X-Title": "SaaS Builder"
    }

    req = urllib.request.Request(
        API_URL,
        data=json.dumps(payload).encode("utf-8"),
        headers=headers,
        method="POST"
    )

    try:
        with urllib.request.urlopen(req, timeout=180) as response:
            result = json.loads(response.read().decode("utf-8"))

            message = result.get("choices", [{}])[0].get("message", {})

            # Check for images array
            if message.get("images"):
                image_url = message["images"][0]["image_url"]["url"]
                return image_url

            # Check for content array with image parts
            content = message.get("content")
            if isinstance(content, list):
                for part in content:
                    if part.get("type") == "image_url":
                        return part["image_url"]["url"]

            # Check for inline_data in content
            if isinstance(content, str) and content.startswith("data:image"):
                return content

            print(f"No image in response: {json.dumps(result, indent=2)}", file=sys.stderr)
            sys.exit(1)

    except urllib.error.HTTPError as e:
        print(f"API Error: {e.code} - {e.read().decode()}", file=sys.stderr)
        sys.exit(1)
    except Exception as e:
        print(f"Error: {e}", file=sys.stderr)
        sys.exit(1)


def clean_response(content: str, output_type: str) -> str:
    content = content.strip()
    if content.startswith("```"):
        lines = content.split("\n")
        if lines[0].startswith("```"):
            lines = lines[1:]
        if lines and lines[-1].strip() == "```":
            lines = lines[:-1]
        content = "\n".join(lines)
    return content.strip()


def save_base64_image(data_url: str, output_path: str):
    """Save a base64 data URL to a file"""
    if data_url.startswith("data:image"):
        # Extract base64 data after the comma
        header, b64data = data_url.split(",", 1)
        image_data = base64.b64decode(b64data)

        with open(output_path, "wb") as f:
            f.write(image_data)
    else:
        # Raw base64
        image_data = base64.b64decode(data_url)
        with open(output_path, "wb") as f:
            f.write(image_data)


def main():
    parser = argparse.ArgumentParser(description="Gemini Bridge for SaaS Builder")
    parser.add_argument("prompt", help="The prompt to send to Gemini")
    parser.add_argument("-t", "--type", dest="output_type", default="text",
                       choices=["code", "svg", "json", "text", "image"],
                       help="Output type (default: text)")
    parser.add_argument("-o", "--output", dest="output_file",
                       help="Output file path (optional)")

    args = parser.parse_args()

    result = call_gemini(args.prompt, args.output_type)

    if args.output_file:
        if args.output_type == "image":
            save_base64_image(result, args.output_file)
            print(f"Image saved to {args.output_file}", file=sys.stderr)
        else:
            with open(args.output_file, "w") as f:
                f.write(result)
            print(f"Output written to {args.output_file}", file=sys.stderr)
    else:
        print(result)


if __name__ == "__main__":
    main()
