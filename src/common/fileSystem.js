import * as FileSystem from "expo-file-system";

export const deleteFile = async (fileName) => {
  const path = `${FileSystem.documentDirectory}${fileName}`;
  FileSystem.deleteAsync(path);
};

export const createEmptyFileIfNotExists = async (fileName) => {
  const path = `${FileSystem.documentDirectory}${fileName}`;
  const file = await FileSystem.getInfoAsync(path);

  if (!file.exists) {
    await FileSystem.writeAsStringAsync(path, "", { encoding: FileSystem.EncodingType.UTF8 });
    return true;
  }
  return false;
};

export const writeToFile = async (fileName, stringToWrite) => {
  const path = `${FileSystem.documentDirectory}${fileName}`;
  const file = await FileSystem.getInfoAsync(path);

  console.log("writed: " + stringToWrite);

  if (file.exists) {
    await FileSystem.writeAsStringAsync(path, stringToWrite, { encoding: FileSystem.EncodingType.UTF8 });
    return true;
  }
  return false;
};

export const readFile = async (fileName) => {
  const path = `${FileSystem.documentDirectory}${fileName}`;
  const file = await FileSystem.readAsStringAsync(path);
  return file;
};
