import React from "react";
import { Link } from "react-router";

import type { Country } from "~/types";
import type { Route } from "./+types/countries";

export async function clientLoader() {
  const res = await fetch("https://restcountries.com/v3.1/all");
  const data: Country[] = await res.json();
  return { countries: data };
}

export default function Countries({ loaderData }: Route.ComponentProps) {
  const [search, setSearch] = React.useState("");
  const [region, setRegion] = React.useState("");

  const { countries } = loaderData;
  const filteredCountries = React.useMemo(() => {
    return (
      countries?.filter((country) => {
        const matchesRegion =
          !region || country.region.toLowerCase() === region.toLowerCase();
        const matchesSearch =
          !search ||
          country.name.common.toLowerCase().includes(search.toLowerCase());
        return matchesRegion && matchesSearch;
      }) ?? []
    );
  }, [countries, search, region]);

  return (
    <main className="p-6">
      <h2 className="mb-6 text-2xl font-bold text-gray-900">Countries</h2>

      <div className="mb-6 flex flex-col gap-4 sm:flex-row">
        <input
          type="text"
          placeholder="Search by name..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full rounded border border-gray-300 px-3 py-2 focus:border-indigo-500 focus:outline-none sm:w-1/2"
        />
        <select
          name="region"
          id="region"
          value={region}
          onChange={(e) => setRegion(e.target.value)}
          className="w-full rounded border border-gray-300 px-3 py-2 focus:border-indigo-500 focus:outline-none sm:w-1/2"
        >
          <option value="">All Regions</option>
          <option value="africa">Africa</option>
          <option value="americas">Americas</option>
          <option value="asia">Asia</option>
          <option value="europe">Europe</option>
          <option value="oceania">Oceania</option>
        </select>
      </div>

      {filteredCountries.length === 0 ? (
        <div>No countries match your filters.</div>
      ) : (
        <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
          {filteredCountries.map((country, index) => (
            <li
              key={index}
              className="rounded-xl border border-gray-200 bg-white p-4 shadow transition hover:shadow-lg"
            >
              <Link
                to={`/countries/${country.name.common}`}
                className="text-lg font-semibold text-indigo-600 hover:underline"
              >
                {country.name.common}
              </Link>
              <span className="mt-1 block text-sm text-gray-600">
                Region: {country.region} | Population: {country.population}
              </span>
            </li>
          ))}
        </ul>
      )}
    </main>
  );
}
