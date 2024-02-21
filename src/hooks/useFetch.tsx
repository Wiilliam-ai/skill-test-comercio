import { useEffect, useState } from "react";
import { News, Note } from "../interfaces/News";

const useFetch = ( url: string ) => {

  const [notes, setNotes] = useState<Note[]>();
  const [error,setError] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    
    const fetchData = async (): Promise<void> => {
        try {
            setLoading(true);
            const response = await fetch(url)
            const { record }: News = await response.json();
            setNotes(record.notes)
        } catch (error) {
            setError(true)
        }finally {
            setLoading(false);
        }
    }

    fetchData()

  }, [url])

  return {
    notes,
    error,
    loading
  }
}

export default useFetch