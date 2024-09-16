function CountryRow({ country }) {
  return (
    <tr>
      <td className="firstColCell">
        <span>{country.id}</span>
        <img src={`flags/${country.flag}_48x48.png`} alt={country.name} />
        <span>{country.name}</span>
      </td>
      <td className="medal">{country.medals[0]}</td>
      <td className="medal">{country.medals[1]}</td>
      <td className="medal">{country.medals[2]}</td>
      <td className="medal">
        {country.medals[0] + country.medals[1] + country.medals[2]}
      </td>
    </tr>
  );
}

export default CountryRow;
