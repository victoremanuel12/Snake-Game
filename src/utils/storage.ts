function getItem<T>(key: string) {
   try {
       const local = localStorage.getItem(key)
       if (!!local) return JSON.parse(local) as T
       else throw new Error(`No data found with key: ${key}`)
   } catch (error) {
       return null
   }
}

function setItem<T>(key: string, value: T) {
   try {
       localStorage.setItem(key, JSON.stringify(value))
   } catch (error) {
   }
}

function removeItem(key: string) {
   try {
       localStorage.removeItem(key)
   } catch (error) {
   }
}

function clear() {
   try {
       localStorage.clear()
   } catch (error) {
   }
}

const storage = {
   getItem, setItem, removeItem, clear
}

export default storage