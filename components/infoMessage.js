const InfoMessage = ({ children }) => (
  <div className="bg-blue-100 border-t border-b border-blue-500 text-blue-700 px-4 py-3" role="alert">
    <p className="font-bold"></p>
    <p className="text-sm">{children}</p>
  </div>
);

export default InfoMessage;