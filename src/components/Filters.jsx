import React from "react";

const Filters = ({ filters, setFilters, incidents }) => {
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFilters((prev) => ({ ...prev, [name]: value }));
    };
    const uniqueStates = [...new Set(incidents.map((i) => i.state))].sort();

    return (
        <div className="bg-white p-4 rounded shadow grid grid-cols-1 md:grid-cols-4 gap-4">
            <div>
                <label className="text-sm font-medium">Time Range</label>
                <select name="time" onChange={handleChange} className="w-full border p-2 rounded">
                    <option value="all">All</option>
                    <option value="today">Today</option>
                    <option value="week">This Week</option>
                    <option value="month">This Month</option>
                </select>
            </div>
            <div>
                <label className="text-sm font-medium">Incident Type</label>
                <select name="type" onChange={handleChange} className="w-full border p-2 rounded">
                    <option value="all">All</option>
                    <option value="Flood">Flood</option>
                    <option value="Fire">Fire</option>
                    <option value="Earthquake">Earthquake</option>
                    <option value="Landslide">Landslide</option>
                </select>
            </div>
            <div>
                <label className="text-sm font-medium">State</label>
                <select
                    value={filters.state}
                    onChange={(e) => setFilters({ ...filters, state: e.target.value })}
                    className="border p-2 rounded"
                >
                    <option value="">All States</option>
                    {uniqueStates.map((state) => (
                        <option key={state} value={state}>
                            {state}
                        </option>
                    ))}
                </select>

            </div>
            <div>
                <label className="text-sm font-medium">Severity</label>
                <select name="severity" onChange={handleChange} className="w-full border p-2 rounded">
                    <option value="all">All</option>
                    <option value="Low">Low</option>
                    <option value="Medium">Medium</option>
                    <option value="High">High</option>
                </select>
            </div>
        </div>
    );
};

export default Filters;

