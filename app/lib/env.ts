// @ts-nocheck
export function env(variable: string, defaultValue: string = ""): string {
  if (typeof process === "undefined") {
    return import.meta.env[variable] ?? defaultValue;
  }

  if (typeof Netlify === "undefined") {
    return process.env[variable] ?? defaultValue;
  }

  return Netlify.env.get(variable) ?? defaultValue;
}
