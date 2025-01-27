export const Skills = () => {
    return (
      <section className="bg-gray-900 text-white py-10">
        <div className="container mx-auto px-6">
          <div className="bg-gray-800 p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-4">Skills</h2>
            <p className="mb-4">
              <strong>Programming Languages:</strong> Go, Java, Python,
              JavaScript, TypeScript
            </p>
            <p className="mb-4">
              <strong>Frameworks:</strong> SprintBoot, FastAPI, Flask, React
            </p>
            <p className="mb-4">
              <strong>Databases:</strong> PostgreSQL, MySQL, MongoDB
            </p>
            <p>
              <strong>DevOps Tools:</strong> AWS, Docker, Kubernetes, Terraform
            </p>
            <a
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              className="text-green-500 hover:underline mt-4 block"
            >
              More on GitHub
            </a>
          </div>
        </div>
      </section>
    );
}