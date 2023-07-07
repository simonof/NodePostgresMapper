import  mappingObject  from './mappingObject.js';

export default 
function mapFieldsRecursively (obj, ctx, path = "") {
  if (Array.isArray(obj)) {
    obj.forEach((item, index) => {
      const newPath = `${path}[${index}]`;
      mapFieldsRecursively(item, ctx, newPath);
    });
  } else if (typeof obj === "object") {
    Object.entries(obj).forEach(([key, value]) => {
      const newPath = path ? `${path}.${key}` : key;
      mapFieldsRecursively(value, ctx, newPath);
    });
  } else {
    ctx.forEach(item => {
      const regex = new RegExp(item.value_path_mapping_json_key.replace(/\[\d+\]/g, "\\[\\d+\\]"));
      if (regex.test(path) && obj === item.flora_value) {
        const keys = path.split(/[.[\]]/).filter(key => key !== "");
        let currentObj = mappingObject;
        for (let i = 0; i < keys.length - 1; i++) {
          currentObj = currentObj[keys[i]];
        }
        currentObj[keys[keys.length - 1]] = item.mapping_value;
      }
    });
  }
}

