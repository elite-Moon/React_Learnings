//** Props makes component reusable */
// Here we also use tailwind css
//** if we want to pass any array or variable in props we have to declare it first check ex where Props used */

function PropsDemo(Props) {
  console.log('props', Props);
  return (
    <div className='display-flex table-row'>
      {/* <h1 className='bg-green-200  text-black p-4 rounded-xl'>Tailwind test</h1> */}
      <div className='w-[400px] rounded-md border'>
        <img
          src='https://images.unsplash.com/photo-1522199755839-a2bacb67c546?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGJsb2d8ZW58MHx8MHx8&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=60'
          alt='Laptop'
          className='h-[200px] w-full rounded-md object-cover'
        />
        <div className='p-4'>
          <h1 className='text-lg font-semibold'>{Props.titleCard}</h1>
          <p className='mt-3 text-sm text-gray-600'>{Props.aboutCard}</p>
          <button
            type='submit'
            className='mt-4 rounded-sm bg-black px-3.5 py-1 text-[15px] font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black'
          >
            {Props.buttonText || 'click me to start'}
          </button>
        </div>
      </div>
    </div>
  );
}

export default PropsDemo;
