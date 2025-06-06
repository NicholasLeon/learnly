export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[];

export type Database = {
  public: {
    Tables: {
      _prisma_migrations: {
        Row: {
          applied_steps_count: number;
          checksum: string;
          finished_at: string | null;
          id: string;
          logs: string | null;
          migration_name: string;
          rolled_back_at: string | null;
          started_at: string;
        };
        Insert: {
          applied_steps_count?: number;
          checksum: string;
          finished_at?: string | null;
          id: string;
          logs?: string | null;
          migration_name: string;
          rolled_back_at?: string | null;
          started_at?: string;
        };
        Update: {
          applied_steps_count?: number;
          checksum?: string;
          finished_at?: string | null;
          id?: string;
          logs?: string | null;
          migration_name?: string;
          rolled_back_at?: string | null;
          started_at?: string;
        };
        Relationships: [];
      };
      Chapter: {
        Row: {
          courseId: string;
          createdAt: string;
          description: string;
          id: string;
          title: string;
        };
        Insert: {
          courseId: string;
          createdAt?: string;
          description: string;
          id: string;
          title: string;
        };
        Update: {
          courseId?: string;
          createdAt?: string;
          description?: string;
          id?: string;
          title?: string;
        };
        Relationships: [
          {
            foreignKeyName: "Chapter_courseId_fkey";
            columns: ["courseId"];
            isOneToOne: false;
            referencedRelation: "Course";
            referencedColumns: ["id"];
          }
        ];
      };
      Course: {
        Row: {
          createdAt: string;
          createdBy: string;
          description: string;
          id: string;
          image: string | null;
          title: string;
        };
        Insert: {
          createdAt?: string;
          createdBy: string;
          description: string;
          id: string;
          image?: string | null;
          title: string;
        };
        Update: {
          createdAt?: string;
          createdBy?: string;
          description?: string;
          id?: string;
          image?: string | null;
          title?: string;
        };
        Relationships: [
          {
            foreignKeyName: "Course_createdBy_fkey";
            columns: ["createdBy"];
            isOneToOne: false;
            referencedRelation: "User";
            referencedColumns: ["id"];
          }
        ];
      };
      CourseEnrollment: {
        Row: {
          courseId: string;
          enrolledAt: string;
          id: string;
          userId: string;
        };
        Insert: {
          courseId: string;
          enrolledAt?: string;
          id: string;
          userId: string;
        };
        Update: {
          courseId?: string;
          enrolledAt?: string;
          id?: string;
          userId?: string;
        };
        Relationships: [
          {
            foreignKeyName: "CourseEnrollment_courseId_fkey";
            columns: ["courseId"];
            isOneToOne: false;
            referencedRelation: "Course";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "CourseEnrollment_userId_fkey";
            columns: ["userId"];
            isOneToOne: false;
            referencedRelation: "User";
            referencedColumns: ["id"];
          }
        ];
      };
      Material: {
        Row: {
          chapterId: string;
          content: string;
          createdAt: string;
          id: string;
          type: Database["public"]["Enums"]["MaterialType"];
        };
        Insert: {
          chapterId: string;
          content: string;
          createdAt?: string;
          id: string;
          type: Database["public"]["Enums"]["MaterialType"];
        };
        Update: {
          chapterId?: string;
          content?: string;
          createdAt?: string;
          id?: string;
          type?: Database["public"]["Enums"]["MaterialType"];
        };
        Relationships: [
          {
            foreignKeyName: "Material_chapterId_fkey";
            columns: ["chapterId"];
            isOneToOne: false;
            referencedRelation: "Chapter";
            referencedColumns: ["id"];
          }
        ];
      };
      Question: {
        Row: {
          answer: string;
          chapterId: string;
          createdAt: string;
          id: string;
          options: string[] | null;
          questionText: string;
        };
        Insert: {
          answer: string;
          chapterId: string;
          createdAt?: string;
          id: string;
          options?: string[] | null;
          questionText: string;
        };
        Update: {
          answer?: string;
          chapterId?: string;
          createdAt?: string;
          id?: string;
          options?: string[] | null;
          questionText?: string;
        };
        Relationships: [
          {
            foreignKeyName: "Question_chapterId_fkey";
            columns: ["chapterId"];
            isOneToOne: false;
            referencedRelation: "Chapter";
            referencedColumns: ["id"];
          }
        ];
      };
      User: {
        Row: {
          id: string;
          email: string;
          name: string | null;
          avatar: string | null;
          role: "ADMIN" | "USER";
        };
        Insert: {
          id: string;
          email: string;
          name?: string | null;
          avatar?: string | null;
          role?: "ADMIN" | "USER";
        };
        Update: {
          name?: string | null;
          avatar?: string | null;
          role?: "ADMIN" | "USER";
        };
        Relationships: [
          {
            foreignKeyName: "UserProgress_chapterId_fkey";
            columns: ["chapterId"];
            isOneToOne: false;
            referencedRelation: "Chapter";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "UserProgress_userId_fkey";
            columns: ["userId"];
            isOneToOne: false;
            referencedRelation: "User";
            referencedColumns: ["id"];
          }
        ];
      };
    };
    Views: {
      [_ in never]: never;
    };
    Functions: {
      [_ in never]: never;
    };
    Enums: {
      MaterialType: "video" | "text";
      ProgressStatus: "not_started" | "in_progress" | "completed";
      Role: "ADMIN" | "USER";
    };
    CompositeTypes: {
      [_ in never]: never;
    };
  };
};

type DefaultSchema = Database[Extract<keyof Database, "public">];

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database;
  }
    ? keyof (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R;
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
      DefaultSchema["Views"])
  ? (DefaultSchema["Tables"] &
      DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
      Row: infer R;
    }
    ? R
    : never
  : never;

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database;
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I;
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
  ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
      Insert: infer I;
    }
    ? I
    : never
  : never;

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database;
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U;
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
  ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
      Update: infer U;
    }
    ? U
    : never
  : never;

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof Database;
  }
    ? keyof Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never
> = DefaultSchemaEnumNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
  ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
  : never;

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof Database },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof Database;
  }
    ? keyof Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
  ? Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
  ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
  : never;

export const Constants = {
  public: {
    Enums: {
      MaterialType: ["video", "text"],
      ProgressStatus: ["not_started", "in_progress", "completed"],
      Role: ["ADMIN", "USER"],
    },
  },
} as const;
