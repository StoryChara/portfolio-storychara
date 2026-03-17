import { supabase } from "./SupabaseAPI";

export const getEducation = async () => {
    const { data, error } = await supabase
        .from('education')
        .select('*')
        .order('id', { ascending: false });;

    if (error) {
        console.error("[Supabase Error] message:", error.message);
        console.error("[Supabase Error] details:", error.details);
        console.error("[Supabase Error] hint:", error.hint);
        throw error;
    }

    return data;
}

export const getCourses = async () => {
    const { data, error } = await supabase
        .from('courses')
        .select('*')
        .order('id', { ascending: false });;

    if (error) {
        console.error("[Supabase Error] message:", error.message);
        console.error("[Supabase Error] details:", error.details);
        console.error("[Supabase Error] hint:", error.hint);
        throw error;
    }

    return data;
}

export const getSkills = async () => {
    const { data, error } = await supabase
        .from('skills')
        .select('*')
        .order('percentage', { ascending: false });

    if (error) {
        console.error("[Supabase Error] message:", error.message);
        console.error("[Supabase Error] details:", error.details);
        console.error("[Supabase Error] hint:", error.hint);
        throw error;
    }

    return data;
}

export const getLanguages  = async () => {
    const { data, error } = await supabase
        .from('languages')
        .select('*')
        .order('percentage', { ascending: false });

    if (error) {
        console.error("[Supabase Error] message:", error.message);
        console.error("[Supabase Error] details:", error.details);
        console.error("[Supabase Error] hint:", error.hint);
        throw error;
    }

    return data;
}

export const getOtherSkills = async (count = 6) => {
    const { data, error } = await supabase
        .rpc('get_other_skills', { limit_count: count });

    if (error) {
      console.error("[Supabase Error] message:", error.message);
      console.error("[Supabase Error] details:", error.details);
      console.error("[Supabase Error] hint:", error.hint);
      throw error;
    }

    return data;
}

export const getSkillLevel = (percentage) => {
    if (percentage < 35) return "Basic";
    if (percentage < 75) return "Intermediate";
    if (percentage < 85) return "Advanced";
    if (percentage < 99) return "Professional";
    return "Native";
};