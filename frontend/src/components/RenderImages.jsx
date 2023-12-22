export default function RenderImages({imgs, onClick}) {
  return (
    <div className="shoe-img">
      {imgs.map((img) => (
        <img key={img.id} src={img.src} alt={img.alt} style={{width: '160px', height:'160px'}} onClick={onClick} />
      ))}
    </div>
  )
}