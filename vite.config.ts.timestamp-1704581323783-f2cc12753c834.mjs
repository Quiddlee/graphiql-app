// vite.config.ts
import { defineConfig } from "file:///D:/Frontend/Reactjs/Rs-school/apps/graphiql-app/node_modules/vite/dist/node/index.js";
import react from "file:///D:/Frontend/Reactjs/Rs-school/apps/graphiql-app/node_modules/@vitejs/plugin-react/dist/index.mjs";
import { resolve } from "path";
var __vite_injected_original_dirname = "D:\\Frontend\\Reactjs\\Rs-school\\apps\\graphiql-app";
var vite_config_default = defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      { find: "@", replacement: resolve(__vite_injected_original_dirname, "./src/") },
      { find: "@shared", replacement: resolve(__vite_injected_original_dirname, "./src/shared") },
      { find: "@components", replacement: resolve(__vite_injected_original_dirname, "./src/components") },
      { find: "@services", replacement: resolve(__vite_injected_original_dirname, "./src/services") },
      { find: "@pages", replacement: resolve(__vite_injected_original_dirname, "./src/pages") },
      { find: "@assets", replacement: resolve(__vite_injected_original_dirname, "./src/assets") }
    ]
  },
  base: "./",
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./src/test/setupTests.tsx",
    css: false,
    coverage: {
      provider: "istanbul",
      thresholds: {
        statements: 50
      }
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJEOlxcXFxGcm9udGVuZFxcXFxSZWFjdGpzXFxcXFJzLXNjaG9vbFxcXFxhcHBzXFxcXGdyYXBoaXFsLWFwcFwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiRDpcXFxcRnJvbnRlbmRcXFxcUmVhY3Rqc1xcXFxScy1zY2hvb2xcXFxcYXBwc1xcXFxncmFwaGlxbC1hcHBcXFxcdml0ZS5jb25maWcudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0Q6L0Zyb250ZW5kL1JlYWN0anMvUnMtc2Nob29sL2FwcHMvZ3JhcGhpcWwtYXBwL3ZpdGUuY29uZmlnLnRzXCI7Ly8vIDxyZWZlcmVuY2UgdHlwZXM9XCJ2aXRlc3RcIiAvPlxyXG4vLy8gPHJlZmVyZW5jZSB0eXBlcz1cInZpdGUvY2xpZW50XCIgLz5cclxuXHJcbmltcG9ydCB7IGRlZmluZUNvbmZpZyB9IGZyb20gJ3ZpdGUnO1xyXG5pbXBvcnQgcmVhY3QgZnJvbSAnQHZpdGVqcy9wbHVnaW4tcmVhY3QnO1xyXG5pbXBvcnQgeyByZXNvbHZlIH0gZnJvbSAncGF0aCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xyXG5cdHBsdWdpbnM6IFtyZWFjdCgpXSxcclxuXHRyZXNvbHZlOiB7XHJcblx0XHRhbGlhczogW1xyXG5cdFx0XHR7IGZpbmQ6ICdAJywgcmVwbGFjZW1lbnQ6IHJlc29sdmUoX19kaXJuYW1lLCAnLi9zcmMvJykgfSxcclxuXHRcdFx0eyBmaW5kOiAnQHNoYXJlZCcsIHJlcGxhY2VtZW50OiByZXNvbHZlKF9fZGlybmFtZSwgJy4vc3JjL3NoYXJlZCcpIH0sXHJcblx0XHRcdHsgZmluZDogJ0Bjb21wb25lbnRzJywgcmVwbGFjZW1lbnQ6IHJlc29sdmUoX19kaXJuYW1lLCAnLi9zcmMvY29tcG9uZW50cycpIH0sXHJcblx0XHRcdHsgZmluZDogJ0BzZXJ2aWNlcycsIHJlcGxhY2VtZW50OiByZXNvbHZlKF9fZGlybmFtZSwgJy4vc3JjL3NlcnZpY2VzJykgfSxcclxuXHRcdFx0eyBmaW5kOiAnQHBhZ2VzJywgcmVwbGFjZW1lbnQ6IHJlc29sdmUoX19kaXJuYW1lLCAnLi9zcmMvcGFnZXMnKSB9LFxyXG5cdFx0XHR7IGZpbmQ6ICdAYXNzZXRzJywgcmVwbGFjZW1lbnQ6IHJlc29sdmUoX19kaXJuYW1lLCAnLi9zcmMvYXNzZXRzJykgfSxcclxuXHRcdF0sXHJcblx0fSxcclxuXHRiYXNlOiAnLi8nLFxyXG5cdHRlc3Q6IHtcclxuXHRcdGdsb2JhbHM6IHRydWUsXHJcblx0XHRlbnZpcm9ubWVudDogJ2pzZG9tJyxcclxuXHRcdHNldHVwRmlsZXM6ICcuL3NyYy90ZXN0L3NldHVwVGVzdHMudHN4JyxcclxuXHRcdGNzczogZmFsc2UsXHJcblx0XHRjb3ZlcmFnZToge1xyXG5cdFx0XHRwcm92aWRlcjogJ2lzdGFuYnVsJyxcclxuXHRcdFx0dGhyZXNob2xkczoge1xyXG5cdFx0XHRcdHN0YXRlbWVudHM6IDUwLFxyXG5cdFx0XHR9LFxyXG5cdFx0fSxcclxuXHR9LFxyXG59KTtcclxuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUdBLFNBQVMsb0JBQW9CO0FBQzdCLE9BQU8sV0FBVztBQUNsQixTQUFTLGVBQWU7QUFMeEIsSUFBTSxtQ0FBbUM7QUFPekMsSUFBTyxzQkFBUSxhQUFhO0FBQUEsRUFDM0IsU0FBUyxDQUFDLE1BQU0sQ0FBQztBQUFBLEVBQ2pCLFNBQVM7QUFBQSxJQUNSLE9BQU87QUFBQSxNQUNOLEVBQUUsTUFBTSxLQUFLLGFBQWEsUUFBUSxrQ0FBVyxRQUFRLEVBQUU7QUFBQSxNQUN2RCxFQUFFLE1BQU0sV0FBVyxhQUFhLFFBQVEsa0NBQVcsY0FBYyxFQUFFO0FBQUEsTUFDbkUsRUFBRSxNQUFNLGVBQWUsYUFBYSxRQUFRLGtDQUFXLGtCQUFrQixFQUFFO0FBQUEsTUFDM0UsRUFBRSxNQUFNLGFBQWEsYUFBYSxRQUFRLGtDQUFXLGdCQUFnQixFQUFFO0FBQUEsTUFDdkUsRUFBRSxNQUFNLFVBQVUsYUFBYSxRQUFRLGtDQUFXLGFBQWEsRUFBRTtBQUFBLE1BQ2pFLEVBQUUsTUFBTSxXQUFXLGFBQWEsUUFBUSxrQ0FBVyxjQUFjLEVBQUU7QUFBQSxJQUNwRTtBQUFBLEVBQ0Q7QUFBQSxFQUNBLE1BQU07QUFBQSxFQUNOLE1BQU07QUFBQSxJQUNMLFNBQVM7QUFBQSxJQUNULGFBQWE7QUFBQSxJQUNiLFlBQVk7QUFBQSxJQUNaLEtBQUs7QUFBQSxJQUNMLFVBQVU7QUFBQSxNQUNULFVBQVU7QUFBQSxNQUNWLFlBQVk7QUFBQSxRQUNYLFlBQVk7QUFBQSxNQUNiO0FBQUEsSUFDRDtBQUFBLEVBQ0Q7QUFDRCxDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=
