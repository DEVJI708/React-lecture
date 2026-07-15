import { useState, useMemo } from "react";

export default function Loop() {

    
    const car = [
        { id: 1, name: "BMW", model: 2024, owner: "Maulikbhai" },
        { id: 2, name: "Scorpio", model: 2020, owner: "Shivambhai" },
        { id: 3, name: "Swift", model: 1889, owner: "Jaybhai" },
        { id: 4, name: "Venue", model: 2023, owner: "Jeelbhai" }
    ];

    const [search, setsearch] = useState("");


    const filtered = useMemo(() => {
        return car.filter((element) =>
            element.owner.toLowerCase().includes(search.toLowerCase())
        );
    }, [search]);

    return (
        <>
            <ul>
                {car.map((element) => (
                    <li key={element.id}>
                        {element.name}
                    </li>
                ))}
            </ul>

            <input
                type="text"
                placeholder="Search by owner"
                value={search}
                onChange={(e) => setsearch(e.target.value)}
            />

            <table border="1">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>NAME</th>
                        <th>MODEL</th>
                        <th>OWNER</th>
                    </tr>
                </thead>

                <tbody>
                    {filtered.length > 0 ? (
                        filtered.map((element) => (
                            <tr key={element.id}>
                                <td>{element.id}</td>
                                <td>{element.name}</td>
                                <td>{element.model}</td>
                                <td>{element.owner}</td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="4">Record not Found</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </>
    );
}