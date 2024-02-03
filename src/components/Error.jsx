function Error({ children }) {
  return (
    <div className="mb-5 text-center bg-red-600 text-white font-bold uppercase">
      {children}
    </div>
  );
}

export default Error;
