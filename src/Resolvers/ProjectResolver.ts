import ProjectService from "../Services/ProjectService.js";
import { requireAdmin } from "../utils/auth.js";

const ProjectResolver = {
    Query: {
        getProject: async (_: unknown, {id}: { id: string }) => {
            try {
                return await ProjectService.getProjectById(id);
            } catch (error) {
                throw new Error(`Failed to get project: ${error.message}`);
            }
        },
        getProjets: async (_: unknown, {userId}: { userId: string }) => {
            try {
                return await ProjectService.getAllProjects(userId);
            } catch (error) {
                throw new Error(`Failed to get projects: ${error.message}`);
            }
        }
    },
    Mutation: {
        createProject: async (_: unknown, { input }: { input: any }, { user }: any) => {
            requireAdmin(user);
            return await ProjectService.createProject(input);
        },
        updateProject: async (_: unknown, { id, input }: { id: string, input: any }, { user }: any) => {
            requireAdmin(user);
            return await ProjectService.updateProject(id, input);
        },
        deleteProject: async (_: unknown, { id }: { id: string }, { user }: any) => {
            requireAdmin(user);
            return await ProjectService.deleteProject(id);
        }
    }
}


export default ProjectResolver;