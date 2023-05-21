import useTitle from "../../hooks/useTitle";

const Blogs = () => {
  useTitle("blogs");
  return (
    <div className="ms-72 mr-72 mt-5">
      <h1 className="text-3xl font-extrabold text-violet-600 text-center shadow-md">
        Some Question And Answer
      </h1>
      <div className="mt-12">
        <div>
          <h1 className="font-bold text-xl">
            Question-1: What is an access token and refresh token? How do they
            work and where should we store them on the client-side?
          </h1>
          <p className="text-gray-500 mt-5">
            <span className="font-bold"> Answer-:</span> A refresh token just
            helps you re-validate a user without them having to re-enter their
            login credentials multiple times. The access token is re-issued,
            provided the refresh token is a valid one requesting permission to
            access confidential resources.
          </p>
          <br />
          <p className="text-gray-500 mt-5">
            <span className="font-bold">
              Storage of Tokens on the Client-side:
            </span>
            Access Token: The access token should be stored securely on the
            client-side, such as in memory or local storage, to facilitate API
            requests. However, it is important to consider the security
            implications of storing sensitive information on the client-side.
            Protect the access token from cross-site scripting (XSS) attacks and
            ensure it is not accessible to malicious scripts or unauthorized
            users. Refresh Token: The refresh token should be securely stored on
            the server-side, such as in a session store or encrypted database.
            It should never be exposed to or stored directly on the client-side
            due to its long-lived nature and higher sensitivity. It is crucial
            to follow security best practices when handling access and refresh
            tokens, as compromised tokens can lead to unauthorized access to
            resources.
          </p>
        </div>
        <div className="mt-8">
          <h1 className="font-bold text-xl">
            Question-2: Compare SQL and NoSQL databases?
          </h1>
          <p className="text-gray-500 mt-5">
            <span className="font-bold"> Answer-:</span>
            <br />
            <span className="font-bold"> SQL Databases:</span>
            <br />
            <ol>
              <li>
                Structured: SQL databases follow a rigid, predefined structure
                with fixed schemas that enforce data consistency and integrity.
              </li>
              <li>
                Relational: SQL databases use tables with rows and columns to
                store structured data. Relationships between tables are defined
                using primary and foreign keys.
              </li>
              <li>
                ACID Compliance: SQL databases prioritize ACID (Atomicity,
                Consistency, Isolation, Durability) properties, ensuring data
                integrity and transactional consistency.
              </li>
              <li>
                SQL Language: SQL databases use SQL queries to manipulate and
                retrieve data, providing a standardized language for working
                with relational data.
              </li>
              <li>
                Scalability Challenges: Scaling SQL databases horizontally can
                be complex due to their tight coupling with schemas and
                relationships.
              </li>
            </ol>
          </p>
          <br />
          <p className="text-gray-500 mt-5">
            <span className="font-bold">NoSQL Databases:</span>
            <br />
            Schemaless: NoSQL databases allow for flexible and dynamic schemas,
            enabling easy adaptation to changing data structures without the
            need for predefined schemas. Non-relational: NoSQL databases use
            various data models like key-value, document, columnar, or graph to
            store and organize data based on specific use cases. CAP Theorem:
            NoSQL databases prioritize availability and partition tolerance over
            strict consistency, providing high scalability and fault tolerance.
            NoSQL Language: NoSQL databases have their query languages specific
            to their data models (e.g., MongoDB is query language for document
            databases). Scalability Advantages: NoSQL databases are designed for
            scalability, allowing horizontal scaling by distributing data across
            multiple nodes. Choosing between SQL and NoSQL databases depends on
            various factors such as the nature of the data, scalability
            requirements, consistency needs, and the complexity of the
            application. SQL databases are often favored for structured data
            with complex relationships and ACID compliance, while NoSQL
            databases are preferred for handling large-scale, rapidly changing,
            and unstructured data with high availability and scalability
            requirements.
          </p>
        </div>
        <div className="mt-8">
          <div>
            <h1 className="font-bold text-xl">
              Question-3: What is express js? What is Nest JS ?
            </h1>
            <p className="text-gray-500 mt-5">
              <span className="font-bold"> Answer-:</span>
              <br />
              <span className="font-bold"> Express.js:</span>
              <br />
              Express.js is a minimalistic and unopinionated web framework for
              Node.js. It provides a simple and flexible set of features for
              building web applications and APIs. Express.js allows developers
              to handle routing, middleware, and request/response handling
              easily. It offers a wide range of third-party middleware and
              extensions, making it highly customizable and suitable for
              building various types of applications. Express.js is known for
              its lightweight and straightforward nature, providing a solid
              foundation for building scalable web applications.
            </p>
            <br />
            <p className="text-gray-500 mt-5">
              <span className="font-bold">NestJS:</span>
              <br />
              NestJS is a progressive, opinionated framework for building
              scalable and maintainable server-side applications with Node.js.
              It is built on top of Express.js and enhances it with additional
              features and architectural patterns inspired by Angular. NestJS
              follows a modular structure, employing decorators and TypeScript
              to provide a strongly typed and object-oriented programming
              experience. It supports features like dependency injection,
              middleware, routing, authentication, and more, out of the box.
              NestJS promotes the use of reusable and encapsulated modules,
              allowing developers to create highly organized and scalable
              applications with ease.
            </p>
            <br />
            <p>
              In summary, while Express.js focuses on providing a lightweight
              and flexible framework for building web applications, NestJS
              builds upon Express.js and adds opinionated structure and
              conventions, making it suitable for building complex and scalable
              server-side applications using TypeScript. The choice between the
              two depends on the specific requirements of your project and your
              preference for simplicity versus an opinionated framework with
              additional features.
            </p>
          </div>
        </div>
        <div className="mt-8">
          <div>
            <h1 className="font-bold text-xl">
              Question-4: What is MongoDB aggregate and how does it work{" "}
            </h1>
            <p className="text-gray-500 mt-5">
              <span className="font-bold"> Answer-:</span>
              <br />
              <p>
                In MongoDB, the aggregate operation is used to perform advanced
                data processing and analysis on collections of documents. It
                allows you to perform complex data manipulations,
                transformations, and computations within the database itself.
                The aggregate operation takes an array of stages as input, where
                each stage represents a step in the data processing pipeline.
              </p>
              <br />
              <br />
              <span className="font-bold">
                {" "}
                Here is a high-level overview of how the MongoDB aggregate
                operation works:
              </span>
              <br />
              Match Stage: Optionally filters the documents based on specified
              criteria using the $match operator. It acts as a query filter to
              select specific documents for further processing. Projection
              Stage: Optionally reshapes the documents and includes or excludes
              specific fields using the $project operator. It allows you to
              control the output of the aggregated data. Group Stage: Groups the
              documents based on specified fields and performs calculations on
              grouped data using the $group operator. It can perform various
              operations like sum, average, count, and more. Sort Stage:
              Optionally sorts the documents based on specified criteria using
              the $sort operator. It determines the order in which the output
              documents are presented. Limit and Skip Stages: Optionally limits
              the number of documents in the output using the $limit stage or
              skips a certain number of documents using the $skip stage.
              Additional Stages: MongoDB provides many other stages, such as
              $lookup for performing left joins, $unwind for flattening arrays,
              $addFields for adding computed fields, and more. These stages
              allow for more complex data transformations and computations.
              <br />
              <br />
              <br />
              The aggregate operation processes the documents in the specified
              order of stages, passing the result from one stage to the next.
              Each stage operates on the input data, modifies it, and produces
              intermediate results, which are then passed to the next stage for
              further processing. Finally, the aggregate operation returns the
              transformed and computed results based on the specified stages. By
              utilizing the MongoDB aggregate operation, you can perform
              powerful data aggregation, analysis, and computation directly
              within the database, reducing the need for additional processing
              on the application side.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
