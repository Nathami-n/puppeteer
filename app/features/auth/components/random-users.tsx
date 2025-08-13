export default function RandomUsers() {
  return (
    <div className="relative z-10 flex flex-col items-center text-center">
      <p className="text-muted-foreground text-sm mb-2">
        Join <span className="font-medium">thousands</span> of users who are
        already using Crawl<span className="text-primary">i</span>Q.
      </p>
      <div className="flex">
        <img
          src="https://randomuser.me/api/portraits/men/32.jpg"
          alt="user"
          className="w-8 h-8 rounded-full border-2 border-primary object-cover"
        />
        <img
          src="https://randomuser.me/api/portraits/women/44.jpg"
          alt="user"
          className="w-8 h-8 rounded-full border-2 border-primary object-cover"
        />
        <img
          src="https://randomuser.me/api/portraits/men/54.jpg"
          alt="user"
          className="w-8 h-8 rounded-full border-2 border-primary object-cover"
        />
        <img
          src="https://randomuser.me/api/portraits/women/68.jpg"
          alt="user"
          className="w-8 h-8 rounded-full border-2 border-primary object-cover"
        />
      </div>
    </div>
  );
}
