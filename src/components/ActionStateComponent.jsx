import { useActionState } from 'react';

export const ActionStateComponent = () => {
  const handleFormSubmit = async (prevData, formData) => {
    let name = formData.get('name');
    let password = formData.get('password');
    console.log(name, password);
    await new Promise((res) => setTimeout(res, 2000));

    if (name && formData) {
      return {
        message: 'Data submitted',
        name,
        password,
      };
    } else {
      return {
        error: 'Provide proper data',
        name,
        password,
      };
    }
  };

  const [data, action, pending] = useActionState(handleFormSubmit, undefined);
  return (
    <div>
      <form action={action}>
        <div className="flex flex-col">
          <input
            type="text"
            className="bg-zinc-500 m-2 p-1 w-60"
            placeholder="name"
            name="name"
          />
          <input
            type="password"
            className="bg-zinc-500 m-2 p-1 w-60"
            placeholder="password"
            name="password"
          />
          <button
            className="bg-blue-400 m-2 p-1 rounded-sm hover:bg-blue-900 w-30"
            disabled={pending}
          >
            {pending ? 'Submitting' : 'Submit'}
          </button>
          {data?.error && <span className="text-red-500">{data?.error}</span>}
          {data?.message && (
            <span className="text-green-500">{data?.message}</span>
          )}
        </div>
      </form>
    </div>
  );
};
