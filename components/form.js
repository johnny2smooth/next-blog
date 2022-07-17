export default function PageWithJSbasedForm() {
  const handleSubmit = async (event) => {
    event.preventDefault();

    const data = {
      first: event.target.first.value,
      last: event.target.last.value,
    };

    const JSONdata = JSON.stringify(data);

    const endpoint = '/api/form';

    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSONdata,
    };

    const response = await fetch(endpoint, options);

    const result = await response.json();
    alert(`Is this your full name: ${result.data}`);
  };

  return (
    <form onSubmit={handleSubmit} className="bg-slate-400 p-4">
      <label htmlFor="first">First Name</label>
      <input type="text" id="first" name="first" required />

      <label htmlFor="last">Last Name</label>
      <input type="text" id="last" name="last" required />

      <button type="submit">Submit</button>
    </form>
  );
}
