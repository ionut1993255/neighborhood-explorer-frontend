import Form from "../../ui/Form";
import Input from "../../ui/Input";

function SearchCountryForm({
  getCountryData,
  isLoading,
  searchCountry,
  setSearchCountry,
}) {
  function handleSubmit(e) {
    e.preventDefault();
    getCountryData(searchCountry);
  }

  return (
    <Form type="homeForm" onSubmit={handleSubmit}>
      <Input
        type="text"
        id="country"
        autoComplete="name"
        disabled={isLoading}
        placeholder="Search a country..."
        value={searchCountry}
        onChange={(e) => setSearchCountry(e.target.value)}
      />
    </Form>
  );
}

export default SearchCountryForm;
