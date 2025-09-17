import { useFormStatus } from 'react-dom';

const FormStatusComponent = () => {
  const handleFormSubmit = async () => {
    await new Promise((res) => setTimeout(res, 2000));
    console.log('Submit');
  };

  function UserForm() {
    const { pending } = useFormStatus();
    return (
      <div>
        <input className="bg-zinc-400" placeholder="Enter name" />
        <button
          type="submit"
          className={`bg-zinc-100 rounded-xl text-sm ${
            pending ? 'text-zinc-500' : 'text-black'
          } mx-auto p-1`}
          disabled={pending}
        >
          {pending ? 'Submitting' : 'Submit'}
        </button>
      </div>
    );
  }

  return (
    <div>
      <form action={handleFormSubmit}>
        <UserForm />
      </form>
    </div>
  );
};

export default FormStatusComponent;
