function SocialMediaIcon({ src, alt }) {
  return (
    <div className="rounded-full border border-[#323C52] w-max">
      <img src={src} alt={alt} className="w-[46px] h-auto" />
    </div>
  );
}

export default SocialMediaIcon;
