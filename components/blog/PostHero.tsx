interface PostHeroProps {
  image: string;
  title: string;
}

export function PostHero({ image, title }: PostHeroProps) {
  if (!image) return null;
  return (
    <div className="my-8 overflow-hidden rounded-2xl aspect-video">
      <img
        src={image}
        alt={title}
        className="w-full h-full object-cover"
      />
    </div>
  );
}
