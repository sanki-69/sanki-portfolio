// A CSS 3D cube in isometric view. Face colours come from the variant class in styles.css.
export default function Cube({ variant = 'dark', className = '' }) {
  return (
    <div className={`cube cube--${variant} ${className}`}>
      <div className="face f-top" />
      <div className="face f-bottom" />
      <div className="face f-front" />
      <div className="face f-back" />
      <div className="face f-left" />
      <div className="face f-right" />
    </div>
  )
}
