import ProjectService from "../Services/ProjectService";

const ProjectResolver = {
    Query: {
        getProjets: async (_: unknown, {userId}: { userId: string }) => {
            try {
                return await ProjectService.getAllProjects(userId);
            } catch (error) {
                throw new Error(`Failed to get projects: ${error.message}`);
            }
        }
    },
    Mutation: {
        createProject: async (_: unknown, { input }: { input: any }) => {
            try {
                return await ProjectService.createProject(input);
            } catch (error) {
                throw new Error(`Failed to create project: ${error.message}`);
            }
        },
        updateProject: async (_: unknown, { id, input }: { id: string, input: any }) => {
            try {
                console.log(id, input);
                return await ProjectService.updateProject(id, input);
            } catch (error) {
                throw new Error(`Failed to update project: ${error.message}`);
            }
        },
        deleteProject: async (_: unknown, { id }: { id: string }) => {
            try {
                return await ProjectService.deleteProject(id);
            } catch (error) {
                throw new Error(`Failed to delete project: ${error.message}`);
            }
        }
    }
}