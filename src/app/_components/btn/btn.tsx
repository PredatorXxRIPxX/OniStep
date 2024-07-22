
function Btn({ text, styleModified = "" }:any) {
    const defaultStyle = `bg-gradient-to-r from-[#6A30B2] to-[#170D44] text-white p-3 rounded-md ml-4 mr-4 font-semibold duration-300 transition-all hover:scale-125`;
    return (
        <button className={styleModified ? styleModified : defaultStyle}>
            {text}
        </button>
    );
}
export default Btn;
