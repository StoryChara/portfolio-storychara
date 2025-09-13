import { supabase } from "./SupabaseAPI";

export const getProyectos = async () => {
    const { data, error } = await supabase
        .rpc('get_proyectos');

    if (error) {
        console.error("[Supabase Error] message:", error.message);
        console.error("[Supabase Error] details:", error.details);
        console.error("[Supabase Error] hint:", error.hint);
        throw error;
    }

    return data;
}

export const getProyectosDestacados = async () => {
    const { data, error } = await supabase
        .rpc('get_proyectos_destacados');

    if (error) {
        console.error("[Supabase Error] message:", error.message);
        console.error("[Supabase Error] details:", error.details);
        console.error("[Supabase Error] hint:", error.hint);
        throw error;
    }

    return data;
}

export const getExperiencia = async () => {
    const { data, error } = await supabase
      .from('work_experience')
      .select('*')
      .order('id', { ascending: false });;

    if (error) {
      console.error("[Supabase Error] message:", error.message);
      console.error("[Supabase Error] details:", error.details);
      console.error("[Supabase Error] hint:", error.hint);
      throw error;
    }

    return data;
};