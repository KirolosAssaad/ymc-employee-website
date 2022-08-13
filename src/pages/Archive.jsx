import TableDisplay from "../components/tableDisplay";

function Archive() {
  return (
    <div
      style={{
        margin: "1rem",
      }}
    >
      <TableDisplay
        rows={[
          {
            id: 1,
            name: "John Doe",
            email: "fake@email.com",
          },
        ]}
      />
    </div>
  );
}
export default Archive;
