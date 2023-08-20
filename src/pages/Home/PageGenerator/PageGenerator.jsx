import {
  PDFViewer,
  Document,
  Page,
  Text,
  View,
  Image,
} from "@react-pdf/renderer";
import { useState } from "react";

const styles = {
  page: { border: "2px solid blue", padding: "36px" },
  section: { color: "white", textAlign: "center", margin: 30 },
};
const PageGenerator = () => {
  const [inputText, setInputText] = useState("");

  const handleInput = (e) => {
    e.preventDefault();

    const form = e.target;

    const title = form.title.value;
    const code = form.code.value;
    const selectedOption = form.select.value;
    const data = { title, code, selectedOption };
    console.log(data);
    setInputText(data);
  };
  return (
    <div className="flex ">
      <div>
        <form action="" onSubmit={handleInput} className=" flex flex-col">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Document Type</span>
            </label>
            <select className="input input-bordered" name="select">
              <option value="">Select an option</option>
              <option value="Assignment">Assignment</option>
              <option value="Lab Assignment">Lab Assignment</option>
              <option value="Lab Report">Lab Report</option>
            </select>
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Course Title</span>
            </label>
            <input
              type="text"
              name="title"
              required
              placeholder="Course Title"
              className="input input-bordered"
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Course Code</span>
            </label>
            <input
              type="text"
              name="code"
              required
              placeholder="Course code"
              className="input input-bordered"
            />
          </div>

          <div className="form-control mt-6">
            <input className="btn btn-primary" type="submit" value="Submit" />
          </div>
        </form>
      </div>

      <div className="w-3/4">
        <div>
          <div>
            <PDFViewer style={{ width: "100%", height: "500px" }}>
              <Document>
                <Page size="A4" style={styles.page}>
                  <Image
                    style={{
                      width: "80px",
                      marginHorizontal: "auto",
                      textAlign: "center",
                    }}
                    src="https://1.bp.blogspot.com/-3vxpTIoL2sk/XZB_lY4BTVI/AAAAAAAAD-A/RS7d7VauwKkgW-2pmnxdIjBjvMTe-UamwCLcBGAsYHQ/s640/BOU%2Blogo.png"
                  />

                  <Text
                    style={{
                      textAlign: "center",
                      color: "blue",
                      fontSize: "26px",
                      marginVertical: "10px",
                    }}
                  >
                    Bangladesh Open University
                  </Text>
                  <Text style={{ textAlign: "center", fontSize: "18px" }}>
                    <Text
                      style={{
                        color: "blue",
                      }}
                    >
                      Study Center-
                    </Text>{" "}
                    <Text
                      style={{
                        color: "red",
                      }}
                    >
                      Dhaka University of Engineering & Technology, Gazipur
                    </Text>{" "}
                  </Text>
                  <Text style={{ textAlign: "center", color: "#0F52BA" }}>
                    Department Of CSE
                  </Text>
                  {/* <Image
                    style={{
                      width: "100px",
                      marginHorizontal: "auto",
                      textAlign: "center",
                    }}
                    src="https://1.bp.blogspot.com/-3vxpTIoL2sk/XZB_lY4BTVI/AAAAAAAAD-A/RS7d7VauwKkgW-2pmnxdIjBjvMTe-UamwCLcBGAsYHQ/s640/BOU%2Blogo.png"
                  /> */}
                  <Text
                    style={{
                      textAlign: "center",
                      fontSize: "18px",
                      color: "blue",
                    }}
                  >
                    {" "}
                    {inputText.selectedOption}
                  </Text>

                  <Text
                    style={{
                      textAlign: "center",
                      fontSize: "18px",
                      marginVertical: "7px",
                    }}
                  >
                    {" "}
                    {inputText.title}
                  </Text>

                  <Text
                    style={{
                      textAlign: "center",
                      fontSize: "18px",
                    }}
                  >
                    {" "}
                    Course Code: {inputText.code}
                  </Text>

                  <Text
                    style={{
                      fontSize: "18px",
                    }}
                  >
                    {" "}
                    Assignment No: {inputText.code}
                  </Text>
                  <Text
                    style={{
                      fontSize: "18px",
                    }}
                  >
                    {" "}
                    Submission Date: {inputText.code}
                  </Text>
                  {/* title for information */}
                  <View
                    style={{
                      flexDirection: "row",
                      justifyContent: "space-between",
                      marginVertical: "10px",
                    }}
                  >
                    <View
                      style={{
                        backgroundColor: "blue",
                        color: "white",
                        padding: "10px",

                        fontSize: "18px",
                      }}
                    >
                      {" "}
                      <Text>Submitted By</Text>
                    </View>
                    <View
                      style={{
                        backgroundColor: "blue",
                        color: "white",
                        padding: "10px",

                        fontSize: "18px",
                      }}
                    >
                      {" "}
                      <Text>Submitted To</Text>
                    </View>
                  </View>

                  {/* Informatin part */}
                  <View style={{ flexDirection: "row" }}>
                    <View
                      style={{
                        flex: 1,
                        border: "1px solid black",

                        padding: "20px",
                        fontSize: "18px",
                      }}
                    >
                      <Text>Student Name: </Text>
                      <Text>ID: </Text>
                      <Text>Batch: </Text>
                      <Text>Year/Semeter: </Text>

                      <Text style={{ marginTop: "10px" }}>
                        Signature: ___________
                      </Text>
                    </View>
                    <View
                      style={{
                        flex: 1,
                        border: "1px solid black",
                        padding: "20px",
                        fontSize: "18px",
                      }}
                    >
                      <Text>Name</Text>
                      <Text>Professor</Text>
                      <Text>Department Of --- DUET, Gazipur.</Text>
                    </View>
                  </View>
                </Page>
              </Document>
            </PDFViewer>
          </div>
        </div>

        {/* <PDFViewer style={{ width: "100%", height: "500px" }}>
          <Document>
            <Page>
              <View>
                <Image src="https://react-pdf.org/images/logo.png" />
              </View>
              <Text>Name: {inputText}</Text>
            </Page>
          </Document>
        </PDFViewer> */}
      </div>
    </div>
  );
};

export default PageGenerator;
