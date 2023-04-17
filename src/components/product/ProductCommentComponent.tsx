import { useState } from "react";
import ProductCommentCard from "./ProductCommentCard";

const ProductCommentComponent: React.FC<{ chainLevel: number }> = ({
  chainLevel,
}) => {
  const [showingReplies, setShowingReplies] = useState(false);
  const [hoveringReplyLevel, setHoveringReplyLevel] = useState(false);
  return (
    <div className="comment-chain flex w-full flex-col py-4">
      <ProductCommentCard />
      <div className="replies flex ">
        {showingReplies ? (
          <>
            <button
              className="flex w-16 justify-center"
              onClick={() => {
                setShowingReplies(false);
              }}
              onMouseEnter={() => setHoveringReplyLevel(true)}
              onMouseLeave={() => setHoveringReplyLevel(false)}
            >
              <div
                className={`z-20 h-full w-[2px] bg-black/20 ${
                  hoveringReplyLevel ? "bg-black/50" : ""
                }`}
              />
            </button>

            {chainLevel < 5 ? (
              <div className="flex w-full flex-col">
                <ProductCommentComponent chainLevel={chainLevel + 1} />
              </div>
            ) : (
              ""
            )}
          </>
        ) : (
          <button
            style={{
              transition: "75ms background-color",
            }}
            className="mt-4 w-full rounded-md bg-gray-700 p-4 text-white hover:bg-gray-800"
            onClick={() => {
              setShowingReplies(true);
            }}
          >
            Mostrar Respostas
          </button>
        )}
      </div>
    </div>
  );
};
export default ProductCommentComponent;
