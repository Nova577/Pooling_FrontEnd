import request from '@/utils/request'

interface IDictionaryItem {
  name: string
  number: string
}

interface IDictionaryRes {
  country?: IDictionaryItem[]
  state?: IDictionaryItem[]
  section?: IDictionaryItem[]
  occupation?: IDictionaryItem[]
  institute?: IDictionaryItem[]
  title?: IDictionaryItem[]
}

export const getDictionaryApi = async (dictionaryName: string, secondaryDirectoryName?: string): Promise<IDictionaryRes> => {
  return request.get( `/api/V1/dictionary/${dictionaryName}${secondaryDirectoryName ? '/' + secondaryDirectoryName : ''}`)
}
