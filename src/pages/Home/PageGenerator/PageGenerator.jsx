const PageGenerator = () => {
  return (
    <div>
      <div>
        <form action="" className=" flex flex-col">
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered input-accent w-full max-w-xs"
          />
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered input-accent w-full max-w-xs"
          />
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered input-accent w-full max-w-xs"
          />
          <input
            type="submit"
            className="btn btn-accent w-[60px]"
            value={"Submit"}
          />
        </form>
      </div>
      <div>pdf</div>
    </div>
  );
};

export default PageGenerator;
