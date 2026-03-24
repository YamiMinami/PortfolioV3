const devs = [
    { id: 1, name: "Trong", age: "20" },
    { id: 2, name: "Sam", age: "26" },
];

export default function Developers() {
    return (
        <div>
            <h1>Meet the Developers</h1>
            {devs.map((dev) => (
                <div key={dev.id}>
                    <h2>{dev.name}</h2>
                    <p>{dev.age}</p>
                </div>
            ))}
        </div>
    );
}
