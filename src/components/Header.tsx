export default function Header() {
  return (
    <section className="relative my-6">
      <div className="relative mx-auto w-fit">
        <h1 className="text-6xl italic">BINGO Creator</h1>
        <div>
          <div className="absolute left-0 w-full h-1 rounded-full bg-slate-700 top-full" />
          <div className="absolute left-0 w-[90%] h-1 bg-slate-500 rounded-full top-full" />
          <div className="absolute left-0 w-[80%] h-1 bg-slate-300 rounded-full top-full" />
          <div className="absolute left-0 w-[70%] h-1 bg-slate-100 rounded-full top-full" />
        </div>
      </div>
    </section>
  );
}
