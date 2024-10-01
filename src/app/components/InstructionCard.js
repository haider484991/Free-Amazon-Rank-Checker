// src/app/components/InstructionCard.js
const InstructionCard = () => {
    return (
      <div className="my-4 p-4 bg-white rounded shadow-md border border-gray-300">
        <h2 className="text-2xl font-bold text-blue-600">How to Use the Amazon Sales Rank Checker</h2>
        <ol className="mt-2 list-decimal list-inside">
          <li className="mb-2">
            <strong>Enter Product URL:</strong> Paste the Amazon product URL you want to check in the input field.
          </li>
          <li className="mb-2">
            <strong>Click Check Rank:</strong> Press the button to retrieve the sales rank of the specified product.
          </li>
          <li className="mb-2">
            <strong>View Results:</strong> The sales rank will be displayed along with additional product information.
          </li>
          <li>
            <strong>Use Insights:</strong> Utilize the information to improve your product listing or marketing strategy.
          </li>
        </ol>
      </div>
    );
  };
  
  export default InstructionCard;
  