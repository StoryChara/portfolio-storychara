import { supabase } from "./SupabaseAPI";

export const getCertificaciones = async () => {
    try {
        const { data: files, error } = await supabase.storage
            .from("cert")
            .list("", {
                limit: 100,
                offset: 0,
            });

        if (error) {
            console.error("[Supabase Storage Error]:", error);
            throw error;
        }

        const images = files.map((file) => ({
            name: file.name,
            url: `/cert/${file.name}`
        }));

        images.sort((a, b) => b.name.localeCompare(a.name));
        
        return images;
    } catch (err) {
        console.error("Error loading certifications:", err);
        return [];
    }
};