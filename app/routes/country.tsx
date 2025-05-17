import type { Route } from "./+types/country";
import type { Country } from "~/types";

export async function clientLoader({ params }: Route.ClientLoaderArgs) {
  const countryName = params.countryName;

  const res = await fetch(
    `https://restcountries.com/v3.1/name/${countryName}?fullText=true`
  );
  const data: Country[] = await res.json();

  return { country: data[0] };
}

export default function Country({ loaderData }: Route.ComponentProps) {
  const country = {
    name: loaderData.country?.name?.common || "N/A",
    officialName: loaderData.country?.name?.official || "N/A",
    region: loaderData.country?.region || "N/A",
    subregion: loaderData.country?.subregion || "N/A",
    capital: loaderData.country?.capital || "N/A",
    population: loaderData.country?.population || "N/A",
    flagUrl: loaderData.country?.flags.png,
  };

  return (
    <main className="grid grid-cols-1 gap-8 p-6 md:grid-cols-2">
      <div className="flex flex-col gap-4">
        <h2 className="text-3xl font-bold text-gray-900">{country.name}</h2>
        <div className="space-y-2 text-gray-700">
          <p className="font-semibold">
            <span>Official Name:</span> {country.officialName}
          </p>
          <p className="font-semibold">
            <span>Region:</span> {country.region}
          </p>
          <p className="font-semibold">
            <span>Subregion:</span> {country.subregion}
          </p>
          <p className="font-semibold">
            <span>Capital:</span> {country.capital}
          </p>
          <p className="font-semibold">
            <span>Population:</span> {country.population.toLocaleString()}
          </p>
        </div>
      </div>

      {country.flagUrl && (
        <div className="flex items-center justify-center">
          <img
            src={country.flagUrl}
            alt={`${country.name}'s flag`}
            className="h-auto w-56 rounded border shadow-lg"
          />
        </div>
      )}
    </main>
  );
}
