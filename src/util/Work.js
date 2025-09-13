import { supabase } from "./SupabaseAPI";

const convertToNiceUrl = (supabaseUrl) => {
  if (!supabaseUrl) return supabaseUrl;
  
  return supabaseUrl.replace(
    'https://ygxrnommnvcvldtrgdgd.supabase.co/storage/v1/object/public/',
    '/'
  );
};

export const getProyectos = async () => {
    const { data, error } = await supabase
        .rpc('get_proyectos');

    if (error) {
        console.error("[Supabase Error] message:", error.message);
        console.error("[Supabase Error] details:", error.details);
        console.error("[Supabase Error] hint:", error.hint);
        throw error;
    }

    return data.map(project => ({
        ...project,
        image_url: convertToNiceUrl(project.image_url)
    }));
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

    return data.map(project => ({
        ...project,
        image_url: convertToNiceUrl(project.image_url)
    }));
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