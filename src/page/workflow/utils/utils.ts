


export function getRandomElement<T>(array: T[]): T {
    return array[Math.floor(Math.random() * array.length)];
  }
  export function getRandomDescription(): string {
    return getRandomElement([""]);
  }

  export function toTitleCase(str: string) {
    let result = str
      .split("_")
      .map((word, index) => {
        if (index === 0) {
          return checkUpperWords(
            word[0].toUpperCase() + word.slice(1).toLowerCase()
          );
        }
        return checkUpperWords(word.toLowerCase());
      })
      .join(" ");
  
    return result
      .split("-")
      .map((word, index) => {
        if (index === 0) {
          return checkUpperWords(
            word[0].toUpperCase() + word.slice(1).toLowerCase()
          );
        }
        return checkUpperWords(word.toLowerCase());
      })
      .join(" ");
  }
  
  export const upperCaseWords: string[] = ["llm", "uri"];
  export function checkUpperWords(str: string) {
    const words = str.split(" ").map((word) => {
      return upperCaseWords.includes(word.toLowerCase())
        ? word.toUpperCase()
        : word[0].toUpperCase() + word.slice(1).toLowerCase();
    });
  
    return words.join(" ");
  }
  
  export function getRandomName(
    retry: number = 0,
    noSpace: boolean = false,
    maxRetries: number = 3
  ): string {
    const left: string[] = [""];
    const right: string[] = [""];
  
    const lv = getRandomElement(left);
    const rv = getRandomElement(right);
  
    // Condition to avoid "boring wozniak"
    if (lv === "boring" && rv === "wozniak") {
      if (retry < maxRetries) {
        return getRandomName(retry + 1, noSpace, maxRetries);
      } else {
        console.warn("Max retries reached, returning as is");
      }
    }
  
    // Append a suffix if retrying and noSpace is true
    if (retry > 0 && noSpace) {
      const retrySuffix = Math.floor(Math.random() * 10);
      return `${lv}_${rv}${retrySuffix}`;
    }
  
    // Construct the final name
    let final_name = noSpace ? `${lv}_${rv}` : `${lv} ${rv}`;
    // Return title case final name
    return toTitleCase(final_name);
  }
