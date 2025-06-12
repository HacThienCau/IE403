import { useEffect, useState } from "react";


export default function Analysis() {
    const [target, setTarget] = useState(undefined);
	const [label, setLabel] = useState(undefined);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("http://localhost:5000/api/youtube/count",
                    {
                        method: "GET",
                        headers: {
                            "Content-Type": "application/json",
                        },
                    }
                );
                const data = response.json();
                setLabel({
                    clean: data.clean,
                    offensive: data.offensive,
                    hate: data.hate,
                    none: data.all - data.clean - data.offensive - data.hate,
                });
                setTarget({
                    individual: data.individual,
                    groups: data.groups,
                    religion: data.religion,
                    race: data.race,
                    politics: data.politics,
                    none: data.all - data.individual - data.groups - data.religion - data.race - data.politics, 
                })
            } catch (error) {
                console.error("Error fetching data:", error);
            }
            setIsLoading(false);
        }
        fetchData();
    },[]);
  return (
    <div>
        {isLoading ? (
            <div>
            </div>
        ):(
            <div>
            </div>
        )}  
    </div>
  )
}
