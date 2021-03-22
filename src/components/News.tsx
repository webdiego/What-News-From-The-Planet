
interface INews {
  Title?: string;
  Content?: string;
  Img?: string;
}
function News({ Title, Content, Img }: INews) {
  return (
    <div>
      <h1>{Title}</h1>
      <p>{Content}</p>
      <img
        style={{ width: "20rem", height: "12rem", objectFit: "fill" }}
        src={Img ? Img : "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/bd3ff395-e94a-4877-be73-847b0af2b3ac/d6tudsh-0275d4cd-5b1e-45fd-a0ac-5c571a58171b.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvYmQzZmYzOTUtZTk0YS00ODc3LWJlNzMtODQ3YjBhZjJiM2FjXC9kNnR1ZHNoLTAyNzVkNGNkLTViMWUtNDVmZC1hMGFjLTVjNTcxYTU4MTcxYi5wbmcifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.w-S2pt8Ep7WqGsaupuoqqeNlM_nynW_mNFcMw0mBsaw"}
        alt=""
      />
    </div>
  );
}

export default News;
