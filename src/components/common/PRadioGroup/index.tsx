const PRadioGroup = () => {
  return (
    <div className="join h-[60px] flex-1 rounded-3xl font-playfair bg-white opacity-60">
      <input className="join-item btn btn-lg btn-outline flex-1 !bg-transparent border-[0] hover:border" type="radio" name="options" aria-label="Ms" />
      <input className="join-item btn btn-lg btn-outline flex-1 !bg-transparent border-[0] hover:border" type="radio" name="options" aria-label="Mr" />
      <input className="join-item btn btn-lg btn-outline flex-1 !bg-transparent border-[0] hover:border" type="radio" name="options" aria-label="Other" />
    </div>
  )
}

export default PRadioGroup
