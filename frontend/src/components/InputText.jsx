const InputText = ({ text, placeholder, onChangeInput, type }) => {
  return (
    <div className="flex flex-col">
      <span className="text-white">{text}</span>
      <input
        type={type}
        placeholder={`${placeholder}`}
        onChange={(e) => onChangeInput(e.target.value)}
        className="bg-transparent border-b border-gray-400 focus:outline-none focus:border-blue-500 text-white py-2 mb-2"
      />
    </div>
  )
}

export default InputText