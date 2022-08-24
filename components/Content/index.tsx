export default function Content() {
  return (
    <div className="flex flex-col mx-auto p-8">
      <div className="text-center">
        <h2 className="font-bold text-3xl text-blue">Software Development</h2>
        <p className="text-2xl leading-9">
          Specialized in Full Stack Web development, I create and collaborate on
          building optimized web applications using the latest technologies,
          tools and methodologies.
        </p>
      </div>
      <div className="flex flex-row text-center p-8">
        <div className="basis-1/3">
          <h3 className="font-bold text-2xl text-blue">Development</h3>
        </div>
        <div className="basis-1/3">
          <h3 className="font-bold text-2xl text-blue">Methodologies</h3>
        </div>
        <div className="basis-1/3">
          <h3 className="font-bold text-2xl text-blue">Tools</h3>
        </div>
      </div>
    </div>
  );
}