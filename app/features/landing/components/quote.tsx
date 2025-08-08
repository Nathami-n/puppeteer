export function Quote() {
  return (
    <div className="flex flex-col items-center justify-center gap-8 w-full p-14 bg-white z-20">
      <blockquote className="max-w-3xl text-left px-4">
        <p className="text-xl md:text-2xl leading-relaxed tracking-tighter font-medium mb-6">
          SkyAgent has transformed our daily operations. Tasks that once
          consumed hours now complete in moments, freeing our team to focus on
          creativity and strategic growth.
        </p>
        <div className="flex gap-4">
          <div className="size-10 rounded-full  border border-border">
            <img
              src="https://randomuser.me/api/portraits/men/91.jpg"
              alt="Alex Johnson"
              className="size-full rounded-full object-contain"
            />
          </div>
          <div className="text-left">
            <cite className="text-lg font-medium not-italic">
              Alex Johnson
            </cite>
            <p className="text-sm">CTO, Innovatech</p>
          </div>
        </div>
      </blockquote>
    </div>
  );
}
