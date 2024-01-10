export const encryptedString = (str: string, key: number) => {
  key = key || 3
  return Array.from(str).map(char => String.fromCharCode(char.charCodeAt(0) + key)).join('')
}

export const decryptedString = (str: string, key: number) => {
  key = key || 3
  return Array.from(str).map(char => String.fromCharCode(char.charCodeAt(0) + key)).join('')
}

/**
 * judgeInputNumber
 * @param value 
 * @returns 
 */
export const judgeInputNumber = (value: string, length?: number) => {
  const regex = /^\d+$/
  let newValue = value

  if (!regex.test(value) || (length && value.length > length)) {
    newValue = value.slice(0, -1)
  }
  return newValue
}


export const ls = {
  lsKey: 5,
  set: (key: string, value: string): boolean => {
    try {
      localStorage.setItem(encryptedString(key, ls.lsKey), JSON.stringify(value));
      return true;
    } catch (error) {
      return false;
    }
  },
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  get: (key: string): any => {
    try {
      const value = localStorage.getItem(decryptedString(key, ls.lsKey));
      return value ? JSON.parse(value) : null;
    } catch (error) {
      return null;
    }
  },
  remove: (key: string): boolean => {
    try {
      localStorage.removeItem(key);
      return true;
    } catch (error) {
      return false;
    }
  }
}
