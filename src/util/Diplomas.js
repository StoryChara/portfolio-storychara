import { supabase } from "./SupabaseAPI";

export const getCertificaciones = async () => {
    try {
        const { data: files, error } = await supabase.storage
            .from("cert")
            .list("", {
                limit: 100,   // ajusta si tienes >1000 archivos
                offset: 0,
            });

        if (error) {
            console.error("[Supabase Storage Error]:", error);
            throw error;
        }

        const images = files.map((file) => {
            const { data } = supabase.storage.from("cert").getPublicUrl(file.name);
            return {
                name: file.name,
                url: data.publicUrl,
            };
        });

        images.sort((a, b) => b.name.localeCompare(a.name));
        
        return images;
    } catch (err) {
        console.error("Error loading certifications:", err);
        return [];
    }
};