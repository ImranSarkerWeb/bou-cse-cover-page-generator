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
  page: { padding: "30px" },
  section: { color: "white", textAlign: "center", margin: 30 },
};
const PageGenerator = () => {
  const [inputText, setInputText] = useState("");

  const handleInput = (e) => {
    e.preventDefault();

    const form = e.target;

    const title = form.title.value;
    const code = form.code.value;
    const job = form.job.value;
    const no = form.no.value;
    const name = form.name.value;
    const id = form.id.value;
    const batch = form.batch.value;
    const semester = form.semester.value;
    const profName = form.profName.value;
    const designation = form.designation.value;
    const dept = form.dept.value;
    const date = new Date(form.date.value);

    const options = { year: "numeric", month: "long", day: "numeric" };
    const formattedDate = date.toLocaleDateString("en-US", options);
    const selectedOption = form.select.value;
    const data = {
      title,
      job,
      no,
      date: formattedDate,
      code,
      selectedOption,
      name,
      id,
      batch,
      semester,
      profName,
      designation,
      dept,
    };
    console.log(data);
    setInputText(data);
  };
  return (
    <div className="flex gap-4 my-8">
      <div className="w-1/4">
        <form action="" onSubmit={handleInput} className=" flex flex-col">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Document Type</span>
            </label>
            <select
              className="input input-bordered input-sm input-sm"
              name="select"
            >
              <option value="">Select an option</option>
              <option value="Assignment">Assignment</option>
              <option value="Lab Assignment">Lab Assignment</option>
              <option value="Lab Report">Lab Report</option>
            </select>
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Job Name:</span>
            </label>
            <input
              type="text"
              name="job"
              required
              placeholder="Course Title"
              className="input input-bordered input-sm input-sm"
            />
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
              className="input input-bordered input-sm input-sm"
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
              className="input input-bordered input-sm"
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Job No: </span>
            </label>
            <input
              type="number"
              name="no"
              required
              placeholder="Type Number"
              className="input input-bordered input-sm"
              min="1"
              pattern="[0-9]*"
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Date: </span>
            </label>
            <input
              type="date"
              name="date"
              className="input input-bordered input-sm"
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Student Name:</span>
            </label>
            <input
              type="text"
              name="name"
              required
              placeholder="Your name"
              className="input input-bordered input-sm"
            />
          </div>

          {/* student id */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Student ID:</span>
            </label>
            <input
              type="text"
              name="id"
              required
              placeholder="Your ID"
              className="input input-bordered input-sm"
            />
          </div>

          {/* student year/semeseter */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Year/Semester:</span>
            </label>
            <input
              type="text"
              name="semester"
              required
              placeholder="Year/Semester"
              className="input input-bordered input-sm"
            />
          </div>

          {/* student Batch */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Batch No:</span>
            </label>
            <input
              type="text"
              name="batch"
              required
              placeholder="Year/Semester"
              className="input input-bordered input-sm"
            />
          </div>

          {/* submitted to part */}

          <div className="form-control">
            <label className="label">
              <span className="label-text">Tutor Name:</span>
            </label>
            <input
              type="text"
              name="profName"
              required
              placeholder="Tutor Name"
              className="input input-bordered input-sm"
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Designation</span>
            </label>
            <select
              className="input input-bordered input-sm"
              name="designation"
            >
              <option value="">Select an option</option>
              <option value="Professor">Professor</option>
              <option value="Associate Professor">Associate Professor</option>
              <option value="Assistant Professor">Assistant Professor</option>
              <option value="Lecturer">Lecturer</option>
            </select>
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Department:</span>
            </label>
            <input
              type="text"
              name="dept"
              required
              placeholder="Department"
              className="input input-bordered input-sm"
            />
          </div>
          <div className="form-control mt-6">
            <input className="btn btn-accent" type="submit" value="Generate" />
          </div>
        </form>
      </div>

      <div className="w-3/4">
        <PDFViewer style={{ width: "100%", height: "100%" }}>
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

              <Text
                style={{
                  textAlign: "center",
                  fontSize: "26px",
                  textDecoration: "underline",
                  color: "black",
                  fontWeight: "bold",

                  marginTop: "20px",
                }}
              >
                {" "}
                {inputText.selectedOption}
              </Text>

              <Text
                style={{
                  fontSize: "18px",
                  color: "blue",
                  marginVertical: "10px",
                }}
              >
                {" "}
                {inputText.selectedOption} Topic: {inputText.job}
              </Text>

              <Text
                style={{
                  fontSize: "18px",
                  marginVertical: "7px",
                }}
              >
                {" "}
                Course Title: {inputText.title}
              </Text>

              <Text
                style={{
                  fontSize: "18px",
                  marginTop: "10px",
                }}
              >
                {" "}
                Course Code: {inputText.code}
              </Text>

              <Text
                style={{
                  fontSize: "18px",
                  marginTop: "30px",
                  marginBottom: "8px",
                }}
              >
                {" "}
                Assignment No: {inputText.no}
              </Text>
              <Text
                style={{
                  fontSize: "18px",
                  marginBottom: "38px",
                }}
              >
                {" "}
                Date of Submission: {inputText.date}
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

                    padding: "10px",
                    fontSize: "18px",
                  }}
                >
                  <Text>St. Name: {inputText.name} </Text>
                  <Text
                    style={{
                      marginVertical: "7px",
                    }}
                  >
                    ID: {inputText.id}{" "}
                  </Text>
                  <Text>Batch: {inputText.batch} </Text>
                  <Text
                    style={{
                      marginVertical: "7px",
                    }}
                  >
                    Year/Semeter:{inputText.semester}{" "}
                  </Text>

                  <Text style={{ marginTop: "20px" }}>
                    Signature: ______________
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
                  <Text
                    style={{
                      fontWeight: "800",
                    }}
                  >
                    Name: {inputText.profName}
                  </Text>
                  <Text
                    style={{
                      marginVertical: "7px",
                    }}
                  >
                    {inputText.designation}
                  </Text>
                  <Text>Department Of {inputText.dept} DUET, Gazipur.</Text>
                  <Text style={{ marginTop: "20px" }}>
                    Signature: ______________
                  </Text>
                </View>
              </View>
            </Page>
          </Document>
        </PDFViewer>
      </div>
    </div>
  );
};

export default PageGenerator;
